import React from 'react';
import ResultsFilter from '../results-filter';
import ResultsList from '../results-list';

export default function Content() {
  return (
    <section>
      <ResultsFilter />
      <ResultsList />
    </section>
  );
}
