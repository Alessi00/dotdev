import React, { ReactElement } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { Button } from './buttons/Button';
import { getTagPageLink } from '../lib/links';

interface TagLinkProps {
  tag: string;
  className?: string;
}

export function TagLink({ tag, className }: TagLinkProps): ReactElement {
  return (
    <Link href={getTagPageLink(tag)} passHref key={tag} prefetch={false}>
      <Button
        tag="a"
        className={classNames('btn-tertiaryFloat xsmall', className)}
      >
        #{tag}
      </Button>
    </Link>
  );
}

interface TagLinksProps {
  tags: string[];
  className?: string;
  tagClassName?: string;
}

export function TagLinks({
  tags,
  className,
  tagClassName,
}: TagLinksProps): ReactElement {
  if (tags.length === 0) {
    return null;
  }

  return (
    <div className={classNames('flex flex-wrap gap-2', className)}>
      {tags.map((tag) => (
        <TagLink key={tag} tag={tag} className={tagClassName} />
      ))}
    </div>
  );
}
