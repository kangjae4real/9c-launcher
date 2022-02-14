import React, { useState } from "react";
import { observer } from "mobx-react";
import Layout from "src/v2/components/core/Layout";
import { T } from "src/renderer/i18n";
import H1 from "src/v2/components/ui/H1";
import Button from "src/v2/components/ui/Button";
import H2 from "src/v2/components/ui/H2";
import { styled } from "src/v2/stitches.config";
import { useStore } from "src/v2/utils/useStore";
import { useHistory } from "react-router";
import ImportInput, { ImportData } from "src/v2/components/ImportInput";

const transifexTags = "v2/import-view";

const ButtonBar = styled("div", {
  display: "flex",
  "& > * + *": { marginLeft: 16 },
  justifyContent: "center",
});

function ImportView() {
  const account = useStore("account");
  const history = useHistory();

  const [key, setKey] = useState<ImportData>({});

  const handleSubmit = () => {
    if (!key.key) return;
    account.setPrivateKey(key.key);
    history.push("/recover");
  };

  return (
    <Layout sidebar>
      <H1>
        <T _str="Register Your Key" _tags={transifexTags} />
      </H1>
      <H2>
        <T
          _str="Register your backed up key file or key string."
          _tags={transifexTags}
        />
      </H2>
      <ImportInput onSubmit={setKey} fromFile={key.fromFile} />
      <ButtonBar>
        <Button onClick={history.goBack.bind(history)}>
          <T _str="Prev" _tags={transifexTags} />
        </Button>
        <Button variant="primary" disabled={!key.key} onClick={handleSubmit}>
          <T _str="Next" _tags={transifexTags} />
        </Button>
      </ButtonBar>
    </Layout>
  );
}

export default observer(ImportView);