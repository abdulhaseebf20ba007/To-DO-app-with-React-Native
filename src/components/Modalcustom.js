import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Modalcustom = ({ onPress, visible, onAddTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    onAddTask(taskText); 
    setTaskText('');
    onPress(); 
  };

  return (
    <Modal visible={visible} transparent={true} animationType='slide'>
      <View style={styles.modalview}>
        <View style={styles.modalContent}>
          <TextInput
            placeholder='Add your task'
            value={taskText}
            onChangeText={setTaskText}
            style={styles.textInput}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleAddTask} style={styles.addButton}>
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="calendar" size={10} color="#fff" />
            </TouchableOpacity>
            {/* Add one more related icon here */}
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="icon-name" size={10} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalview: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  modalContent: {
    backgroundColor: '#fff',
    height: 100,
    width: 300,
    justifyContent: 'space-between',
    borderRadius: 8,
    padding: 10,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#007AFF',
    padding: 8,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  iconButton: {
    backgroundColor: '#007AFF',
    padding: 8,
    borderRadius: 5,
    marginLeft: 10,
  },
});

export default Modalcustom;
