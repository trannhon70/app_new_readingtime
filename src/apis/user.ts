import instance from './config';

 const LoginApi = async (body: any) => {
  const response = await instance.post('/auth/login', body);
  return response.data;
};
export default LoginApi