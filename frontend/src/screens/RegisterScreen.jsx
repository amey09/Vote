import * as Yup from "yup";
import {Button, Heading, HStack, VStack, Text } from "@chakra-ui/react";
import TextField from "../components/TextField";
import {Formik} from "formik";
import React from "react";
import {Link} from "react-router-dom";

export const RegisterScreen = () => {

    const handleSubmit = async () => {

    }

    return (
        <Formik
            initialValues={{ name: '', email: '', password: ''}}
            validationSchema={Yup.object({
                name: Yup.string()
                    .required('Username Required')
                    .min(6,'Username is too short'),
                email: Yup.string().email("Invalid email")
                    .required('Email Required'),
                password: Yup.string()
                    .required('Password Required')
                    .min(6,'Password is too short'),
                secretKey: Yup.string()
            })}
            onSubmit={async (values) => {
                await handleSubmit(values);
            }}
        >
            {formik => (
                <VStack
                    as='form'
                    w={{ base: '90%', md: 500 }}
                    p={[8,10]}
                    mt={[20,'2vh']}
                    mx='auto'
                    border={['none', '1px']}
                    borderColor={['', 'gray.300']}
                    borderRadius={[10]}
                    justifyContent='center'
                    onSubmit={formik.handleSubmit}
                >
                    <Heading>Register</Heading>
                    <TextField name='name' label='Name' type='name'/>
                    <TextField name='email' label='Email' type='email'/>
                    <TextField name='password' label='Password' type='password'/>
                    <TextField name='secretKey' label='Secret-Key' type='password'/>
                    <HStack w='full'>
                        <Text colorScheme='blue' >Already have an account ?</Text>
                        <Link to={'/login'}>
                            <Button variant='link' colorScheme='blue'>Login</Button>
                        </Link>
                    </HStack>
                    <Button type='submit' rounded='none' w='full' colorScheme='blue'>Submit</Button>
                </VStack>
            )}
        </Formik>
    )
}

export default RegisterScreen
