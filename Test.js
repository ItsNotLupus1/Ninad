const increment = OGComponent => { 
     const COMPI = props => {
         const a = props.a+1
         const b = props.b+1
    return (
          <OGComponent a={a} b={b} {...props} />
          
    
     );
   }
   
  return COMPI;

 }
