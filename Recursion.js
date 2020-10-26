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
    
    //////////////
    
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
    
    ///////////
    
    function fib(n){
      if(n<2){
        return n
      }
      return fib(n-1) + fib(n-2)
    }
    
    console.log(fib(7))
    
    /////////
    
    const mySmallMaze = [
        [' ', ' ', ' '],
        [' ', '*', ' '],
        [' ', '*', ' '],
        [' ', ' ', 'e']
    ];
    
    // function maze(maze){
    //   return(maze[2][2])
    // }
    // console.log(maze(mySmallMaze))
    
    function mazeRun(maze, row, col, path=[]){
      console.log(maze[row][col]) 
      console.log("row:",row,"col:",col)
    
      if(maze[row][col]=== 'e'){
          path.push('sucess!')
          return path
      }
    
      if(maze[row][col+1]=== ' '){
    
          col++
          
     
          path.push('R!')
        return mazeRun(maze, row, col, path)
      }
    
           if(col===2){
            row++
            path.push('D!')
            return mazeRun(maze, row, col, path)
          }
      
        if(maze[row][col+1]=== 'e'){
    
          col++
      
          path.push('R!')
        return mazeRun(maze, row, col, path)
      }
     
        if(maze[row][col+1] === '*'){
    
          row++
       
          path.push('D!')
          return mazeRun(maze, row, col, path)
      }
    
      return path
    
    }
    console.log(mySmallMaze)
    console.log(mazeRun(mySmallMaze, 0, 0))