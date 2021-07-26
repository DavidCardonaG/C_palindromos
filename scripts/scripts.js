function obtTxt(){
    return document.getElementById('data').value;
  }
  
  function checkPalindromo(str){
    let string = str.normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .replace(/[^\w\s]/gi, '')
      .replace(/\s/g, '')
      .toLowerCase()
  
    let txtReverse = string.split('').reverse('').join('');
  
    return string == txtReverse
  }
  
  function mensaje(value, palindromo){
    swal.fire({
      title: value ? `La palabra ${palindromo}. Si es un palindromo ` : `La palabra ${palindromo}. No es un palindromo `,
      
      
    })
  }
  
  function palindromoCheck(){
    const text = obtTxt()
    const palindromo = checkPalindromo(text)
    mensaje(palindromo, text)
  }