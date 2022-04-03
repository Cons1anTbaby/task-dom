/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    const htmlTag = [];
    for (let i = 0; i < count; i++) {
        htmlTag.push(`<${tag}>${content}</${tag}>`);
    }
    document.body.innerHTML = htmlTag.join('');
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level) {
    return generateNode(childrenCount, 1, level);
}

function generateNode(childrenCount, level, maxLevel) {
    let newNode;
    if (maxLevel > level) {
        newNode = document.createElement('div');
        newNode.className = `item_${level}`;
        level++;
        for (let i = 0; i < childrenCount; i++) {
            newNode.append(generateNode(childrenCount, level, maxLevel));
        }
    } else {
        for (let i = 0; i < childrenCount; i++) {
            newNode = document.createElement('div');
            newNode.className = `item_${level}`;
        }
        return newNode;
    }
    return newNode;
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    let htmlTag = generateTree(2, 3);
    let item2Elems = htmlTag.getElementsByClassName('item_2');
    for (let i = 0; i < item2Elems.length; i++) {
        let elementNew = document.createElement('section');
        elementNew.className = 'item_2';
        elementNew.innerHTML = item2Elems[i].innerHTML;
        item2Elems[i].replaceWith(elementNew);
    }
    //     elementNew.innerHTML = item2Elems[i].innerHTML;

    //     item2Elems[i].parentNode.insertBefore(elementNew, item2Elems[i]);
    //     item2Elems[i].parentNode.removeChild(item2Elems[i]);
    // }
    return htmlTag;
}
