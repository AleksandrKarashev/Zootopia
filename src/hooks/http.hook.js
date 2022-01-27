import { useState, useCallback } from 'react';

export const useHttp = () => {
   const [loading, setLoading] = useState(false);
   const [message, setMessage] = useState(null);

   const request = useCallback(async (
      url,
      method = 'GET',
      body = null,
      headers = {}) => {

      setLoading(true);

      try {

         if (body) {
            body = JSON.stringify(body);
            headers['Content-Type'] = 'application/json'
         }
         headers['Authorization'] = "Bearer d65591debb9f8b97788e1b89c8717a71c33eac15aae66bdf00ff26da2ec9bdc7"

         const response = await fetch(url, { method, body, headers });
         const data = await response.json();

         if (!response.ok) {
            setMessage(data.data);
            throw new Error(JSON.stringify(data.data || 'There is some problem, try again, please'))
         }
         setLoading(false)
         return data;

      } catch (e) {
         setLoading(false)
         setMessage(e);
      }

   }, [])

   const clearMessage = useCallback(
      () => {
         setMessage(null);
      }, [])

   return { loading, request, message, clearMessage };
}