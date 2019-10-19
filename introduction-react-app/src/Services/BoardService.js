import { board } from '../Assets/mock';

const getBoard = async () => {
  return new Promise(resolve => setTimeout(() => { resolve(board) }, 2000));
}

export default { getBoard };