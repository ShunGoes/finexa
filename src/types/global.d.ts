interface iTestimony {
    image: string,
    id: number,
    testimony: string,
    author: string,
    role: string,
}
interface iChildProps {
    prevBtnRef: React.RefObject<HTMLButtonElement>;
    nextBtnRef: React.RefObject<HTMLButtonElement>;
  }
interface iProductCard {
    image: string,
    id: number,
    text: string,
    title: string,
}