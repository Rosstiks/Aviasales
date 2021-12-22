import React from 'react';
import ResultsSort from '../results-sort';
import ResultsList from '../results-list';

export default function Content() {
  return (
    <section>
      <ResultsSort />
      <ResultsList />
    </section>
  );
}
