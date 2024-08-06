import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { MORE_VERTICAL } from '../assets/images';
import Modalcustom from '../components/Modalcustom';
import Icon from 'react-native-vector-icons/Ionicons';
import ShimmerLoading from '../components/ShimmerLoading';
import ShimmerStore, { height } from '../components/ShimmerStore';

const Home = () => {
  const [newtask, setnewtask] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const tick = setInterval(() => {
      setIsLoading(false);
    }, 5000);
    return () => {
      clearInterval(tick);
    }
  })

  const addnewtask = (enteredtext) => {
    setnewtask([...newtask, { id: Date.now().toString(), title: enteredtext, completed: false }]);
  };

  const markTaskAsCompleted = (taskId) => {
    const taskIndex = newtask.findIndex((task) => task.id === taskId);
    if (taskIndex !== -1) {
      const updatedTask = { ...newtask[taskIndex], completed: true };
      setnewtask((prevTasks) => {
        const updatedTasks = [...prevTasks];
        updatedTasks.splice(taskIndex, 1); // Remove the task from the newtask list
        return updatedTasks;
      });
      setCompletedTasks((prevTasks) => [...prevTasks, updatedTask]);
    }
  };

  const data = [
    { id: '1', title: 'Work' },
    { id: '2', title: 'Personal' },
    { id: '3', title: 'Wishlist' },
    { id: '4', title: 'Birthday' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );

  const renderTaskItem = ({ item }) => {
    return (
      <View
        style={{
          backgroundColor: item.completed ? '#f0f0f0' : '#fff',
          width: '100%',
          padding: 10,
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderRadius: 5,
        }}
      >
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => markTaskAsCompleted(item.id)}>
            {item.completed ? (
              <Icon name="checkbox" size={18} color="black" style={{ marginRight: 10 }} />
            ) : (
              <Icon name="checkbox-outline" size={18} color="black" style={{ marginRight: 10 }} />
            )}
          </TouchableOpacity>
          <Text style={[styles.taskText, item.completed && styles.completedTaskText]}>
            {item.title}
          </Text>
        </View>
        <Icon name="flag" size={18} color="red" />
      </View>
    );
  };

  const [popUp, setPopUp] = useState(false);

  const fabPress = () => {
    setPopUp(!popUp);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.flatListContainer}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <Image source={MORE_VERTICAL} style={{ height: 20, width: 20, tintColor: 'gray' }} />
      </View>
      {isLoading ? (
      <ShimmerLoading
        style={styles.ShimmerStore}
        Component={ShimmerStore}
        height={height}
        staticCount={5}
      /> ) : (
      <FlatList
        data={newtask}
        renderItem={renderTaskItem}
        keyExtractor={(item) => item.id}
      /> )}
      {completedTasks.length > 0 ? (
        <View style={styles.completedTasksContainer}>
          <FlatList
            data={completedTasks}
            renderItem={renderTaskItem}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={() => (
              <View style={styles.completedTasksHeader}>
                <Text style={styles.completedTasksHeaderText}>Completed Tasks</Text>
              </View>
            )}
          />
        </View>
      ) : null}
      <TouchableOpacity onPress={fabPress} style={styles.fab}>
        <Text style={{ fontSize: 40 }}>+</Text>
      </TouchableOpacity>

      <Modalcustom onPress={fabPress} visible={popUp} onAddTask={addnewtask} />

    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ececec',
    padding: 10,
  },
  flatListContainer: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  itemContainer: {
    backgroundColor: '#ffffff',
    paddingVertical: 7,
    paddingHorizontal: 12,
    marginLeft: 20,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 12,
    color: '#333333',
  },
  fab: {
    backgroundColor: 'rgba(135, 206, 235, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: 70,
    borderRadius: 35,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  taskText: {
    fontSize: 20,
  },
  completedTaskText: {
    textDecorationLine: 'line-through',
    color: '#888', // Adjust the color for completed tasks
  },
  completedTasksContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  completedTasksHeader: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 10,
  },
  completedTasksHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ShimmerStore: {
    borderRadius: 8,
    marginBottom: -530,
    marginHorizontal: 10,
  },
});

export default Home;
