let c=1;
let a= new Array(3);
for(let i=0; i<3; i++)
 a[i] = new Array(3);

for(let i=0; i<3; i++)
{
for(let j=0; j<3; j++)
    {
        a[i][j]=c;
        c++;
    }
}  
function change()
{   
    let row=0,col=0,curr,f=1;
    let m=3,n=3;
    while (row < m && col < n) 
    { 

        if (row + 1 === m || col + 1 === n) 
            break; 

        // Store the first element of next row, this 
        // element will replace first element of current 
        // row 
        let prev = a[row + 1][col]; 

        /* Move elements of first row from the remaining rows */
        for (let i = col; i < m; i++) 
        { 
            curr = a[row][i]; 
            a[row][i] = prev; 
            prev = curr; 
        } 
        row++; 
        
        /* Move elements of last column from the remaining columns */
        for (let i = row; i < m; i++) 
        { 
            curr = a[i][n-1]; 
            a[i][n-1] = prev; 
            prev = curr; 
        } 
        n--; 

         /* Move elements of last row from the remaining rows */
        if (row < m) 
        { 
            for (let i = n-1; i >= col; i--) 
            { 
                curr = a[m-1][i]; 
                a[m-1][i] = prev; 
                prev = curr; 
            } 
        } 
        m--; 

        /* Move elements of first column from the remaining rows */
        if (col < n) 
        { 
            for (let i = m-1; i >= row; i--) 
            { 
                curr = a[i][col]; 
                a[i][col] = prev; 
                prev = curr; 
            } 
        } 
        col++; 
    }
    for(let i=0; i<3; i++)
    {
        for(let j=0; j<3; j++)
        {
            document.getElementById(`btn${f}`).innerHTML = a[i][j];
            f++;
        }
    }
}