exports.modules = {
    assets: [
        'src/package.json',
        'README*',
        'LICENSE*'
    ],
    cdns: [
        {
            name: 'jsdelivr',
            href: 'https://www.jsdelivr.com/package/npm/{{ package.name }}'
        },
        {
            name: 'unpkg',
            href: 'https://unpkg.com/{{ package.name }}'
        }
    ],
    badges: [
        {
            alt: 'CI status',
            href: 'https://circleci.com/gh/{{ github.orgName }}/workflows/{{ github.orgName }}/tree/main',
            src: 'https://img.shields.io/circleci/build/github/{{ github.orgName }}/{{ name }}/main.svg?logo=circleci&logoColor=fff&label=CircleCI'
        },
        {
            alt: 'npm',
            href: 'https://www.npmjs.com/{{ package.name }}',
            src: 'https://img.shields.io/npm/v/{{ package.name }}.svg?logo=npm&logoColor=fff&label=NPM&color=limegreen'
        },
        {
            alt: 'license',
            href: 'https://circleci.com/gh/{{ github.orgName }}/workflows/{{ github.orgName }}/tree/main',
            src: 'https://img.shields.io/github/license/{{ github.orgName }}/{{ name }}'
        }
    ]
}