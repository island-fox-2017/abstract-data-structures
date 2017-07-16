// 1. Describe
/*
Binary Search Tree Data Stucture adalah data struktur yang memiliki basis yang sama dengan algoritma sorting Binary Search.
Sama dengan algoritma sorting Binary Search yang mengandalkan divide and conquer, dimana Binary Search sorting algorithm
mengandalkan data yang berada persis di tengah kumpulan data dan melakukan evaluasi,
dan pada Binary Search Data Structure memiliki root node yang merupakan pusat atau value tengah dari kumpulan data.

Binary Search Tree Data Structure dapat secara sederhana disimpulkan dengan
anak sebelah kiri node memiliki value yang lebih kecil dari node parent tersebut, dan
anak sebelah kanan node memiliki value yang lebih besar dari node parent tersebut,
dan definisi tersebut dapat diterapkan di seluruh node.
Dengan definisi yang sudah disebutkan, dapat disimpulkan bahwa Binary Seacrh Tree Data Structure sangat berguna
untuk menyimpan data dengan sangat terorganisir sesuai value tiap node, dan dapat memudahkan pencarian value.
*/

// ------------
// 2. Implement
let binarySearchTreeDataStructure =
{
  n: 4,
  left:
  {
    n: 2,
    left: { n: 1, left: null, right: null },
    right: { n: 3, left: null, right: null }
  },
  right:
  {
    n: 6,
    left: { n: 5, left: null, right: null },
    right: null
  }
}

function lookup(n, binarySearchTreeDataStructure) {
  if (binarySearchTreeDataStructure === null)
    return false;
  else if (n < binarySearchTreeDataStructure.n)
    return lookup(n, binarySearchTreeDataStructure.left);
  else if (n > binarySearchTreeDataStructure.n)
    return lookup(n, binarySearchTreeDataStructure.right);
  else
    return true;
}

let n1=5, n2=9;
console.log(`${n1} ${lookup(n1, binarySearchTreeDataStructure)?'EXIST':'DOES NOT EXIST'}`);  // 5 EXIST in the data
console.log(`${n2} ${lookup(n2, binarySearchTreeDataStructure)?'EXIST':'DOES NOT EXIST'}`);  // 9 DOESN'T EXIST in the data
// ------------
// 3. Get real
/*
Dalah kehidupan nyata, berguna di dalam mengakses value data secara cepat secara berurutan, beberapa contohnya:
- saat membuat data siswa dan ingin menampilkan data tersebut secara berurutan sesuai abjad,
- saat mencari range data dari x - y, maka hanya perlu mencari data terkecil yang lebih besar dari x,
dan mencari data terbesar yang lebih kecil dari y, dan melakukan iterasi, dan karena Binary Search Tree (balanced tree)
sudah berurutan sesuai value node, maka akan lebih cepat saat mengiterasi range tersebut
dimana notasi asymptotic nya adalah O(log n + k) k adalah berapa value diantara x hingga y.
*/
