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
    subTitle? : string
}
interface iHowItWorks {
    id: number;
    title: string;
    text: string;
    imageSrcLarge: string;
    imageSmall: string;
}
interface iResultItems {
    id: number,
    title: string,
    text: string
    hasEdge: boolean,
    hasBorder: boolean
}