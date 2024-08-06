import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  name: z.string().nonempty('Please enter a valid name.'),
  email: z.string().email('Please enter a valid email address.'),
  password: z.string().min(6, 'Password should be at least 6 characters long.'),
});

const Mine = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: async (data) => {
      try {
        console.log('Validating data:', data);
        return { values: await schema.parse(data) };
      } catch (error) {
        console.log('Validation Error:', error);
        return { errors: error.formErrors };
      }
    },
  });

  const handleSignUp = (data) => {
    console.log('Form data submitted:', data);
    // Form is valid, perform sign up here
    // For example, you can send the form data to the server
    alert('Sign Up successful!');
  };

  return (
    <View>
      <View style={{ backgroundColor: 'white', marginTop: 10, alignContent: 'space-between' }}>
        <Controller
          control={control}
          rules={{ required: 'Name is required.' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <TextInput
                placeholder='Enter your Name'
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
              {errors.name && <Text style={{ color: 'red' }}>{errors.name.message}</Text>}
            </>
          )}
          name="name"
          defaultValue=""
        />

        <Controller
          control={control}
          rules={{ validate: (value) => schema.shape({ email: schema.fields.email }).email.message }}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <TextInput
                placeholder='Enter your Email'
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
              {errors.email && <Text style={{ color: 'red' }}>{errors.email.message}</Text>}
            </>
          )}
          name="email"
          defaultValue=""
        />

        <Controller
          control={control}
          rules={{ required: 'Password is required.' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <TextInput
                placeholder='Enter your Password'
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                secureTextEntry
              />
              {errors.password && <Text style={{ color: 'red' }}>{errors.password.message}</Text>}
            </>
          )}
          name="password"
          defaultValue=""
        />
      </View>

      <View style={{ alignItems: 'center', marginTop: 5 }}>
        <TouchableOpacity onPress={handleSubmit(handleSignUp)}>
          <Text style={{ backgroundColor: 'blue', color: 'white', padding: 10 }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Mine;
