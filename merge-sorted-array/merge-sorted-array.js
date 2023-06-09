export const merge = (nums1, m, nums2, n) => {
  nums1.length = m;
  [...nums1, ...nums2].sort((a, b) => a - b).forEach((v, i) => (nums1[i] = v));
};
