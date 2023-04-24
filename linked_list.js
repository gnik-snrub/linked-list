const node = () => {
  return {
    value: null,
    next: null,
  }
}

const linkedList = () => {
  let head = node()
  let tail = () => {
    let curr = head
    while (curr.next) {
      curr = curr.next
    }
    return curr
  }

  return {
    head,
    tail,
  }
}
