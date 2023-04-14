import { Link, Grid, Column } from '@carbon/react';
import React, { useEffect, useState } from 'react';
import { Octokit } from '@octokit/core';
import RepoTable from './RepoTable';
const octokitClient = new Octokit({});


const RepoPage = () => {
  //this is where we got to in the tutorial Then, inside the RepoPage component:
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function getCarbonRepos() {
      const res = await octokitClient.request('GET /orgs/{org}/repos', {
        org: 'carbon-design-system',
        per_page: 75,
        sort: 'updated',
        direction: 'desc',
      });

      setRows(getRowItems(res.data));
    }

    getCarbonRepos();
  }, []);

  return (
    <Grid className="repo-page">
      <Column lg={16} className="repo-page__r1">
      <RepoTable headers={headers} rows={rows} />
      </Column>
    </Grid>
  );
};

const getRowItems = (rows) =>
  rows.map((row) => ({
    ...row,
    key: row.id,
    stars: row.stargazers_count,
    issueCount: row.open_issues_count,
    createdAt: new Date(row.created_at).toLocaleDateString(),
    updatedAt: new Date(row.updated_at).toLocaleDateString(),
    links: <LinkList url={row.html_url} homepageUrl={row.homepage} />,
  }));

const LinkList = ({ url, homepageUrl }) => (
  <ul style={{ display: 'flex' }}>
    <li>
      <Link href={url}>GitHub</Link>
    </li>
    {homepageUrl && (
      <li>
        <span>&nbsp;|&nbsp;</span>
        <Link href={homepageUrl}>Homepage</Link>
      </li>
    )}
  </ul>
);


const headers = [
  {
    key: 'name',
    header: 'Name',
  },
  {
    key: 'createdAt',
    header: 'Created',
  },
  {
    key: 'updatedAt',
    header: 'Updated',
  },
  {
    key: 'issueCount',
    header: 'Open Issues',
  },
  {
    key: 'stars',
    header: 'Stars',
  },
  {
    key: 'links',
    header: 'Links',
  },
];




export default RepoPage;