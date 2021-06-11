class TreeStore {
  static async all() {
    return [{
      name: 'elm'
    }]
  }
}

export async function Trees(): Promise<Response> {
  const trees = await TreeStore.all()
  const body = JSON.stringify(trees)  
  const headers = {    
    'Access-Control-Allow-Origin': '*',    
    'Content-type': 'application/json'  
  }  
  return new Response(body, { headers })
}