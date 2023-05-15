import * as React from "react";

export default function Page() {
  React.useEffect(() => {
    console.log(Intl.RelativeTimeFormat);
  }, []);

  return <div>RelativeTimeFormat</div>;
}
