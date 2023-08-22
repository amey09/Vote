import React from 'react'
import {
    Button, Checkbox,
    Heading, HStack, Text,
    VStack
} from "@chakra-ui/react";
import * as Yup from 'yup'
import {Formik} from "formik";
import TextField from "../components/TextField";
import {Link} from "react-router-dom";

export const LoginScreen = () => {

    const handleSubmit = async () => {

    };


    return (
        <Formik
            initialValues={{ email: '', password: ''}}
            validationSchema={Yup.object({
                email: Yup.string().email("Invalid email")
                    .required('Email Required'),
                password: Yup.string()
                    .required('Password Required')
            })}
            onSubmit={async (values, actions) => {
                await handleSubmit(values)
                actions.resetForm()
            }}
        >
            {formik => (
                <VStack
                    as='form'
                    w={{ base: '90%', md: 500 }}
                    p={[8,10]}
                    mt={[20,'10vh']}
                    mx='auto'
                    border={['none', '1px']}
                    borderColor={['', 'gray.300']}
                    borderRadius={[10]}
                    justifyContent='center'
                    onSubmit={formik.handleSubmit}
                >
                    <Heading>Login</Heading>
                    <TextField name='email' label='Email' type='email'/>
                    <TextField name='password' label='Password' type='password'/>
                    <HStack w='full' justify='space-between'>
                        <Checkbox>Remember Me</Checkbox>
                    </HStack>
                    <HStack w='full'>
                        <Text colorScheme='blue' >New user?</Text>
                        <Link to={'/register'}>
                        <Button variant='link' colorScheme='blue'>SignUp</Button>
                        </Link>
                    </HStack>
                    <Button type='submit' rounded='none' w='full' colorScheme='blue'>Submit</Button>
                </VStack>
            )}
        </Formik>
    )
}

export default LoginScreen
