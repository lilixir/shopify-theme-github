https://apis.google.com/js/platform.js?onload=renderOptIn

/*

<script>
  window.renderOptIn = function() {
    window.gapi.load('surveyoptin', function() {
      window.gapi.surveyoptin.render(
        {
          // REQUIRED FIELDS
          "merchant_id": 402382268,
          "order_id": "ORDER_ID",
          "email": "CUSTOMER_EMAIL",
          "delivery_country": "COUNTRY_CODE",
          "estimated_delivery_date": "YYYY-MM-DD",

          // OPTIONAL FIELDS
          "products": [{"gtin":"GTIN1"}, {"gtin":"GTIN2"}]
        });
    });
  }
</script>

*/