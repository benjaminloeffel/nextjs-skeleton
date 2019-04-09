import React from 'react';
import Layout from '../layouts/alt-layout';
import RegisterForm from '../components/registerform';

const SignUp = () => (
  <Layout title="Sign Up" hasHero={false}>
    <h2>Sign Up</h2>
    <p>No Account? No Problem!</p>
    <RegisterForm />
  </Layout>
);

export default SignUp;
