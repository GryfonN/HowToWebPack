import React from 'react';
import $ from 'jquery';

/**
 * Normalne by som pouzil tento kod
 <a href="#" data-toggle="tooltip" title="Some tooltip text!">Hover over me</a>
 <script>
 $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
 </script>
 */
class BootstrapPopupTest extends React.Component {

  componentDidMount() {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
  }

  render() {
    return (
      <a href="#" data-toggle="tooltip" title="Funguje">Test Boostrap 3 js</a>
    );
  }

}

export default BootstrapPopupTest;
