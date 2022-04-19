function soma(n1: number,n2: number): (number |  unknown){
   try{
      if((n1 == 0) || (n2 == 0)){
        throw "parâmetros não informado"
      } 
      return n1 + n2     
   }
   catch(err){
      console.log("passou aqui")
      return err
   } 
     
}
