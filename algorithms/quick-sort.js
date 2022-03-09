class QuickSort {
  static arr = []

  static #divide(arrDiv = this.arr) {
    if (arrDiv.length === 0) return []
    if (arrDiv.length === 1) return [arrDiv[0]]
    const pivot = arrDiv[0]
    let left = []
    let right = []
    for (let i = 1; i < arrDiv.length; i++) {
      if (arrDiv[i] < pivot) left.push(arrDiv[i])
      else right.push(arrDiv[i])
    }
    left = this.#divide(left)
    right = this.#divide(right)
    left.push(pivot)
    return left.concat(right)
  }

  static run(array) {
    this.arr = array
    return this.#divide()
  }
}

const arr = [10, 3, 9, 1, -3, 0, 8, 4, 4, -1, -2, 100, 98, 101]
console.log(QuickSort.run(arr))
