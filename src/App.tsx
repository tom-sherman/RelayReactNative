import React, { Suspense } from 'react';

import { environment } from './relay-env';
import { AppHeroQuery } from './__generated__/AppHeroQuery.graphql';
import { graphql } from 'react-relay';
import {
  PreloadedQuery,
  RelayEnvironmentProvider,
  usePreloadedQuery,
  useQueryLoader,
} from 'react-relay/hooks';
import { Button, Text, View } from 'react-native';

const query = graphql`
  query AppHeroQuery {
    hero {
      name
      id
    }
  }
`;

export function App() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Suspense fallback={<Text>Root loading...</Text>}>
        <View style={{ padding: 50 }}>
          <Test />
        </View>
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

function Test() {
  const [queryRef, loadQuery, disposeQuery] = useQueryLoader<AppHeroQuery>(
    query,
    null
  );

  if (queryRef == null) {
    return (
      <Button title="Click to reveal name" onPress={() => loadQuery({})} />
    );
  }

  return (
    <>
      <Button
        onPress={disposeQuery}
        title=" Click to hide the name and dispose the query."
      />
      <Suspense fallback={<Text>Loading...</Text>}>
        <NameDisplay queryReference={queryRef} />
      </Suspense>
    </>
  );
}

function NameDisplay({
  queryReference,
}: {
  queryReference: PreloadedQuery<AppHeroQuery>;
}) {
  const hero = usePreloadedQuery<AppHeroQuery>(query, queryReference);

  return <Text>{hero.hero?.name}</Text>;
}
