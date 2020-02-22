import React, {
  useState,
  PropsWithChildren,
  ChangeEvent,
  useEffect
} from "react";
import { useParams } from "react-router-dom";

type FunctionalComponentPropsT = PropsWithChildren<{ text: string }>;

type PackageT = { package: { name: string; version: string } };

const extractPkgName = (e: PackageT) => {
  return `${e.package.name} - ${e.package.version}`;
};

export const FunctionalComponent = (props: FunctionalComponentPropsT) => {
  const { text } = props;
  const { id } = useParams();

  const [textValue, setText] = useState<string>("");
  const [pkgToSearch, setPgk] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const applySearch = () => {
    setPgk(textValue);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };

  useEffect(() => {
    if (pkgToSearch) {
      const normalized = pkgToSearch.split(" ").join("+");
      fetch(`https://api.npms.io/v2/search?q=${normalized}`)
        .then(response => response.json())
        .then(json => {
          setResult(
            JSON.stringify(json.results.map(extractPkgName), undefined, 2)
          );
        })
        .catch(e => {
          setResult(e.toString());
        });
    }
  }, [pkgToSearch]);

  return (
    <div>
      {text} with route id = {id}
      <br />
      <input value={textValue} onChange={handleChange} />
      <button onClick={applySearch}>Search</button>
      <br />
      <pre>{result || "No result"}</pre>
    </div>
  );
};
