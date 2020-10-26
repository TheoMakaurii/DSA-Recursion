function test(test){

    console.log(test.toUpperCase()+'!!!!')
    }
    test('have fun')
    
    function countingSheep(sheep){
      if(sheep === 0){
        return 'All sheep jumped over the fence!'
      }
    
      return `${sheep} sheep and one jumped over the fence!   ` + countingSheep(sheep -1);
    }
    
    console.log(countingSheep(3))
    
    function powerCalculator(a, n){
      if(n === 0){
        return 1
      }
      if(n< 0){
        return 'n value must be more than zero'
      }
    
      return a* powerCalculator(a, n-1)
    }
    
    console.log(powerCalculator(10, 2))
    
    function reverseString(string){
      if(string.length===1){
        return string
      }
      let reverseIndex=1
      let reverse = string[string.length-reverseIndex]
      return reverse + reverseString(string.slice(0,-1))
    
    }
    console.log(reverseString('Theo'))
    
    function nthTri(nth){
      if(nth===1){
        return nth
      }
      return nth + nthTri(nth-1)
    }
    
    console.log(nthTri(6))
    
    function split(string, splitter, result=[""]){
    
    if(string===''){
      return result
    }
    
    if(string[0]=== splitter){
      result.push('')
    }
    else{
      result[result.length-1]+= string[0]
    }
    return split(string.slice(1), splitter, result)
    }
    
    console.log(split('20/02/2220', '/'))