module.exports = {
  branches: ['main', 'master', 'develop','+([0-9])?(.{+([0-9]),x}).x'], // Default, develop and maintenance
  preset: 'angular', // Default: angular
  plugins: [
    '@semantic-release/commit-analyzer', // Analyze commits to determine version
    '@semantic-release/release-notes-generator', // Generate release notes
    '@semantic-release/changelog', // Generate CHANGELOG.md (Needs @semantic-release/changelog installed)
    [
      '@semantic-release/npm',
      {
        // Update package.json version
        npmPublish: false // No npm package
      }
    ],
    '@semantic-release/git', // Create commit with [skip ci] (Needs @semantic-release/git installed)
    '@semantic-release/github' // Create Github release & comment on issues, PRs
  ]
}
