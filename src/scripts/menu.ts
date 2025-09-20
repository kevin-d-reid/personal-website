import { checkedQuerySelector } from "@scripts/checkedDOMSelectors";

checkedQuerySelector(document,".hamburger").addEventListener("click", () => {
  checkedQuerySelector(document,".nav-links").classList.toggle("expanded");
});