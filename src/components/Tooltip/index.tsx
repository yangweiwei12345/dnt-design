import React from 'react';

export default ({ title, children }: { title: string, children: React.ReactElement }) => <h1>{title}{children}</h1>;
