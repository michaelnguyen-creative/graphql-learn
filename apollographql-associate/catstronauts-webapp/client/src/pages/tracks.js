import React from "react";
import { Layout } from "../components";
import { useQuery, gql } from "@apollo/client";
import { QueryResult } from "../components";
import TrackCard from "../containers/track-card";

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */

// define TRACKS query
export const TRACKS = gql`
  query getTracks {
    tracksForHome {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
    }
  }
`;

const Tracks = () => {
  // useQuery hook returns an object with loading, error, & data properties
  const { loading, error, data } = useQuery(TRACKS);
  // return QueryResult nested in Layout
  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.tracksForHome?.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
