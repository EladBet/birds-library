import Card from "./Card";
import { useEffect, useRef } from "react";

export default function Sidebar({
  isLoading,
  isError,
  data,
  onLoad,
  onSelect
}) {
  const libRef = useRef();

  useEffect(() => {
    const lib = libRef.current;

    function handleScroll(e) {
      if (lib.scrollTop + lib.clientHeight >= lib.scrollHeight) {
        !isLoading && onLoad();
      }
    }

    lib.addEventListener("scroll", handleScroll);

    return () => {
      lib.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading, onLoad]);

  return (
    <div className="side-bar" ref={libRef}>
      {isLoading && "Loading..."}
      {isError && "Error"}
      {data.map((item, index) => (
        <Card key={index} {...item} onSelect={() => onSelect(index)} />
      ))}
    </div>
  );
}
