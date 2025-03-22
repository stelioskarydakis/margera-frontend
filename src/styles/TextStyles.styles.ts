import { css } from "styled-components";

export const titleStyles = css`
  font-size: var(--font-size-lg);
  line-height: 2rem;
  font-weight: var(--text-bold);
`;
export const smallTextStyles = css`
  font-size: var(--font-size-sm);
  line-height: 1.125rem;
`;
export const subtitleStyles = css`
  font-size: var(--font-size-md);
  line-height: 1.75rem;
  font-weight: var(--text-semibold);
`;
export const ellipsisTextStyles = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
