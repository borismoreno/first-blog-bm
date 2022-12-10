module.exports = ({ env }) => ({
    upload: {
        config: {
            provider: 'aws-s3',
            providerOptions: {
                accessKeyId: env('AKIA4JHCHHCC2PEFOGSD'),
                secretAccessKey: env('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'),
                region: env('us-east-1'),
                params: {
                    Bucket: env('strapi-bm-images'),
                },
            },
            // These parameters could solve issues with ACL public-read access — see [this issue](https://github.com/strapi/strapi/issues/5868) for details
            actionOptions: {
                upload: {
                    ACL: null
                },
                uploadStream: {
                    ACL: null
                },
            }
        },
    }
});