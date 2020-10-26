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