// pages/api/user/login.ts
import axios from 'axios';

// pages/api/user/login.ts
class Service {
  login = async (user: string, pass: string) => {
    try { 
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}login`, { user, pass });
      const { token } = response.data;
      // Ojo: localStorage no estará disponible en SSR, solo en cliente:
      localStorage.setItem('token', token); 
      console.log('Inicio de sesión exitoso');
      return response.data;
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      return { error: true, message: error || 'Error interno' };
    }
  };
}

export default Service;
