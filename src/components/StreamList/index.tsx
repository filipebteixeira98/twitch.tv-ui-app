import React from 'react';

import {
  List,
  StreamContainer,
  StreamThumbnail,
  StreamColumn,
  StreamRow,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText,
} from './styles';

import streamThumbnail from '../../images/stream_thumbnail.jpg';
import profileImgThumbnail from '../../images/profile_thumbnail.jpeg';

const StreamList: React.FC = () => {
  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar source={profileImgThumbnail} />
            <StreamUsername numberOfLines={1}>rocketseat_official</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            Front-end with Next.js, Chakra UI and GraphQL
          </StreamDescription>

          <StreamCategory numberOfLines={1}>
            Science & Technology
          </StreamCategory>
        </StreamRow>

        <TagRow>
          <TagView>
            <TagText>React Native</TagText>
          </TagView>
          <TagView>
            <TagText>Mobile development</TagText>
          </TagView>
        </TagRow>
      </StreamColumn>
    </StreamContainer>
  )

  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
