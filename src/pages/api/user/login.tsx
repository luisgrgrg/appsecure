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
  getEmpleadosActivos = async () => {
    const headers = {
      'Authorization': localStorage.getItem('token'),  // Ejemplo de header de autorización
      'Content-Type': 'application/json',  // Ejemplo de header de tipo de contenido
      'rol': localStorage.getItem('idRol')
    };
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}obysecureapi/getEmpleadosActivos`, { headers });
      return response.data;
    } catch (error) {
      console.error('Error en la consulta:', error);
      return { error: true, message: error || 'Error interno' };
    }
  };
}

export default Service;
