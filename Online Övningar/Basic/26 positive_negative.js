function pos_neg(x,y)
{
    if ((x<0 && y>0) || (x>0 && y<0))
    {
        return true;
    }
    return false;
    
}

console.log(pos_neg(1,4));
console.log(pos_neg(-1, 4));