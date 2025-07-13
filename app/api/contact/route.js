export async function POST(request) {
  try {
    const { nombre, email, asunto, mensaje } = await request.json();
    
    // Validar que todos los campos estén presentes
    if (!nombre || !email || !asunto || !mensaje) {
      return Response.json(
        { error: 'Todos los campos son requeridos' }, 
        { status: 400 }
      );
    }
    
    // Validar formato de email básico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: 'Formato de email inválido' }, 
        { status: 400 }
      );
    }
    
    // Enviar al webhook
    const response = await fetch(process.env.WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic " + btoa(`${process.env.WEBHOOK_USERNAME}:${process.env.WEBHOOK_PASSWORD}`)
      },
      body: JSON.stringify({
        nombre,
        email,
        asunto,
        mensaje
       })
    });
    
    if (!response.ok) {
      throw new Error(`Webhook response: ${response.status}`);
    }
    
    const data = await response.json();
    
    return Response.json({ 
      success: true, 
      message: 'Mensaje enviado correctamente',
      data 
    });
    
  } catch (error) {
    console.error('Error sending contact message:', error);
    return Response.json(
      { error: 'Error interno del servidor' }, 
      { status: 500 }
    );
  }
}
