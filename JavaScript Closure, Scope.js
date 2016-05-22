var closureLib = (function () {
    
    function is_array(a) {
        return(a.constructor === Array);
    }
    
    function arrClone(a) {
        var b = a.concat();
        return b;            
    }
    
    function frequent(a) {
        var x = 0;
        var count = 1;
        for(var i = 1; i < a.length; i++)
        {
            if (a[x] == a[i])
            count++;
            else count--;
            if(!count) x = i, count = 1;
        }
        return a[x];
    }
    
    function delDuplicate(a) {
        a.sort(caseIgnoredSort);
        for (var i = a.length-1; i > 0; i--) {
            if (a[i].toLowerCase() == a[i-1].toLowerCase()) {
                a.splice(i,1);
            }
        }
        return a;
    }
    
    function caseIgnoredSort(a,b) {
        if (a.toLowerCase() > b.toLowerCase()) return 1;
        else return -1;
    }
    
    function arrShuffle(a) {
        a.sort(function() { return 0.5 - Math.random() });
        return a;
    }
    
    function sortByTitle(a) {
        a.sort (function(x,y) { return (parseInt (x ["title"]) - parseInt (y ["title"]))});
        return a;
    }
    
    function merge(a, arr2) {
        var arr3 = a.concat(arr2);
        arr3.sort();
        for (var i = arr3.length-1; i > 0; i--) {
            if (arr3[i] == arr3[i-1]) {
                arr3.splice(i,1);
            }	
        }
        return arr3;
    }
    
    function delSpecific(arr,a) {
        for (var i = arr.length-1; i > 0; i--) {
            if (arr[i] == a) {
                arr.splice(i,1);
            }
        }
        return arr;
    }
    
    function getRandom(a) {
        return a[Math.floor(Math.random() * (a.length))];
    }
    
    function moveElem(a,index,pos) {
        a.splice(pos,0,a.splice(index,1));
        return a;
    }
    
    function splitStr(a) {
        var reg = /,\s*|\.\s*|\s*-\s*|\s*\"\s*|!\s*|\?\s*|\s/;
        var arr = a.split(reg);
        return arr;
    }
    
    function capitalFirst(a) {
        a = a.charAt(0).toUpperCase() + a.substr(1);
        return a;
    }
    
    function camelize(a) {
        var b = '';
        for (var i = 0; i < a.length; i++) {
            if (a.substr(i,1) == ' ' || a.substr(i,1) == '-') {}
            else if (a.substr(i-1,1) == ' ' || a.substr(i-1,1) == '-') {
                b = b + a.charAt(i).toUpperCase();
            }
            else {
                b += a.substr(i,1);
            }
        }
        return b;
    }    
    
    function objLength(a) {
        return Object.keys(a).length;
    }
    
    function iterateArray(a,callback) {
        for (var i = 0; i < a.length; i++) {
            callback(a[i]);
        }
    }
    
    function test() {
        // task1
        document.write('<br /> Task 1 <br />');
        document.write(is_array('qwe') + ' ');
        document.write(is_array([1,2,4,0]));

        // task2
        document.write('<br /> Task 2 <br />');
        var a = [1,2,3];
        var b = arrClone(a); 
        document.write(a[0] + ' ');
        document.write(b[0] + ' '); 
        b[0] = 15;
        document.write(a[0] + ' ');
        document.write(b);

        // task3
        document.write('<br /> Task 3 <br />');
        document.write(frequent([1,2,1,2,1]));

        // task4
        document.write('<br /> Task 4 <br />');
        document.write(delDuplicate(['audi','toyota','Audi','Nissan','TOYOTA','BMW']));

        // task5
        document.write('<br /> Task 5 <br />');
        document.write(arrShuffle([1,2,3,4,5,6]));

        // task6
        document.write('<br /> Task 6 <br />');
        var library = [ 
        { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
        { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
        { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
        ];
        sortByTitle(library);
        for (var i = 0; i < library.length; i++) {
            document.write('author: \'', library[i].author, '\', title: \'', library[i].title, '\', libraryID: \'',
            library[i].libraryID, '\'', '<br />')
        }

        // task7
        document.write('<br /> Task 7 <br />');
        document.write(merge([1,2,3,3,2,1], [4,5,4,6]));

        // task8
        document.write('<br /> Task 8 <br />');
        document.write(delSpecific([1,2,5,3,5,6,2],2));

        // task9
        document.write('<br /> Task 9 <br />');
        document.write(getRandom(['Lucy', 'Helen', 'Mark', 'Jacob', 'Angela']));

        // task10
        document.write('<br /> Task 10 <br />');
        document.write(moveElem([1,2,3,4,5,6],2,4));

        // task11
        document.write('<br /> Task 11 <br />');
        document.write(splitStr('Hello, man. \"Hello\" - you said. I\'m ok! How are you?'));

        // task12
        document.write('<br /> Task 12 <br />');
        document.write(capitalFirst('hello'));

        // task13
        document.write('<br /> Task 13 <br />');
        document.write(camelize("Java Script <br />"));
        document.write(camelize("java-script <br />"));
        document.write(camelize("Java Script Exercises <br />"));

        // task14
        document.write('<br /> Task 14 <br />');
        var result = 0;
        iterateArray([2,4,1,2,4], function(el){
            result += el;
        });
        document.write(result);
            
        // task15
        document.write('<br /> Task 15 <br />');
        document.write(objLength({ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254}));

    }
    
    return {
        is_array: is_array,
        arrClone: arrClone,
        frequent: frequent,
        delDuplicate: delDuplicate,
        arrShuffle: arrShuffle,
        sortByTitle: sortByTitle,
        merge: merge,
        delSpecific: delSpecific,
        getRandom: getRandom,
        moveElem: moveElem,
        splitStr: splitStr,
        capitalFirst: capitalFirst,
        camelize: camelize,
        iterateArray: iterateArray,
        objLength: objLength,
        test: test       
    };
    
})();

closureLib.test();