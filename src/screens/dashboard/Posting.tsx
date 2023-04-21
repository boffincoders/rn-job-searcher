import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import Tabs from './jobtabs/Tabs';
const Posting = () => {
  const [tabs] = useState<string[]>(['Posting', 'My connection']);
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <ScrollView>
      <Tabs
        tabs={tabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
    </ScrollView>
  );
};

export default Posting;
