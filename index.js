const para=document.createElement('h3');
const para1=document.createTextNode('Buy high quality organic fruits online');
const head=document.getElementsByTagName('div');
para.appendChild(para1);
const firstdiv=head[0];
firstdiv.appendChild(para);

para.style.fontStyle='italic';
const seconddiv=head[1];
const parag=document.createElement('p');
const parag1=document.createTextNode('Total fruits: 4');
parag.appendChild(parag1);
const fruits=document.querySelector('.fruits');
seconddiv.insertBefore(parag,fruits);
parag.id='fruits-total';