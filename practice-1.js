'use strict';

function collectSameElements(collectionA, collectionB)
{
  const result=[];
  var p=0;
  for(var i=0;i<collectionA.length;i++)
    for( var j=0;j<collectionB.length;j++)
      if(collectionA[i]==collectionB[j])
       {
           result[p]=collectionA[i];
           p++;
       }
  return result;
}
