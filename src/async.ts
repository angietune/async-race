
export class Async {
   
    async get(url: string) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
      }
  
      async post(url: string, data: {name: string, color: string}) {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(data)
        });
    
        const resData = await response.json();
        return resData;
       
      }
  
      async put(url: string, data: {name: string, color: string}) {
        const response = await fetch(url, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        
        const resData = await response.json();
        return resData;
      }
  
      async delete(url: string) {
        const response = await fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json'
          }
        });
    
        const resData = await 'Resource Deleted...';
        return resData;
      }
    
     }
