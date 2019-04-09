import React from 'react';
import Layout from '../layouts/alt-layout';
import LoginForm from '../components/loginform';

const SignIn = () => (
  <Layout title="Sign In" hasHero={false}>
    <h2>Sign In.</h2>
    <p>Enter your details below.</p>
    <LoginForm />
  </Layout>
);

export default SignIn;
