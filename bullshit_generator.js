const task = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

}

const phrase = ['很簡單', '很容易', '很快', '很正常']


let randomIndex = Math.floor(Math.random() * 4)

function bullshitGenerator(options) {

  //create a collection to store thing user picked up
  let collection = []

  if (options === 'engineer') {
    collection = collection.concat(task.engineer)
  }
  if (options === 'designer') {
    collection = collection.concat(task.designer)
  }
  if (options === 'entrepreneur') {
    collection = collection.concat(task.entrepreneur)
  }

  //start generating password
  if (collection.length === 0) {
    return "請選擇一位對象"
  }

  let bullshit = collection[randomIndex] + phrase[randomIndex]
  

  //return the generated password
  return bullshit
}

module.exports = bullshitGenerator